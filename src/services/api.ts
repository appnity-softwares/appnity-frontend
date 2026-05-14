import axios from 'axios';
import { mockData } from './mockData';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081/api/v1';
const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA === 'true';

const api = axios.create({
  baseURL: API_URL,
});

// Helper to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Add request interceptor to include token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Robustly extract the data array from the backend response.
 */
const unwrap = (res: any) => {
  if (!res || !res.data) {
    console.error('API Error: No response data', res);
    return [];
  }

  const envelope = res.data;
  
  if (envelope.success === false) {
    console.error('API Error:', envelope.error || envelope.message);
    return [];
  }

  const payload = envelope.data;

  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && typeof payload === 'object' && 'data' in payload) {
    if (Array.isArray(payload.data)) {
      return payload.data;
    }
    if (payload.data === null || payload.data === undefined) {
      return [];
    }
  }

  if (payload === null || payload === undefined) {
    return [];
  }

  return payload;
};

// Mock wrapper to simulate backend response structure
const wrapMock = async (data: any) => {
  await delay(500); // Simulate network latency
  return data;
};

export const publicApi = {
  getTheme: () => USE_MOCK ? wrapMock(mockData.theme) : api.get('/theme').then(unwrap),
  getNavigation: () => USE_MOCK ? wrapMock(mockData.navigation) : api.get('/navigation').then(unwrap),
  getPage: (slug: string) => USE_MOCK ? wrapMock(mockData.portfolios.find(p => p.slug === slug)) : api.get(`/pages/${slug}`).then(unwrap),
  getBlogs: (page = 1, pageSize = 10) => USE_MOCK ? wrapMock(mockData.portfolios) : api.get(`/blogs?page=${page}&page_size=${pageSize}`).then(unwrap),
  getBlogBySlug: (slug: string) => USE_MOCK ? wrapMock(mockData.portfolios[0]) : api.get(`/blogs/${slug}`).then(unwrap),
  getPortfolios: (category = '', page = 1, pageSize = 10) => USE_MOCK ? wrapMock(mockData.portfolios) : api.get(`/portfolios?category=${category}&page=${page}&page_size=${pageSize}`).then(unwrap),
  getPortfolioBySlug: (slug: string) => USE_MOCK ? wrapMock(mockData.portfolios.find(p => p.slug === slug)) : api.get(`/portfolios/${slug}`).then(unwrap),
  getFeaturedPortfolios: () => USE_MOCK ? wrapMock(mockData.portfolios.filter(p => p.featured)) : api.get('/portfolios/featured').then(unwrap),
  getTeam: () => USE_MOCK ? wrapMock(mockData.team) : api.get('/team').then(unwrap),
  getServices: () => USE_MOCK ? wrapMock(mockData.services) : api.get('/services').then(unwrap),
  getFAQs: () => USE_MOCK ? wrapMock(mockData.faqs) : api.get('/faqs').then(unwrap),
  getPricing: () => USE_MOCK ? wrapMock(mockData.pricing) : api.get('/pricing').then(unwrap),
  getTestimonials: () => USE_MOCK ? wrapMock(mockData.testimonials) : api.get('/testimonials').then(unwrap),
  getValues: () => USE_MOCK ? wrapMock(mockData.values) : api.get('/values').then(unwrap),
  submitContact: (data: { name?: string; email: string; service?: string; message: string }) => 
    USE_MOCK ? wrapMock({ success: true, message: "Message sent successfully (Mock)" }) : api.post('/contact', data).then(res => res.data),
};

export const adminApi = {
  login: (credentials: any) => 
    USE_MOCK ? wrapMock({ access_token: 'mock-token', user: { name: 'Admin', role: 'admin' } }) : api.post('/admin/auth/login', credentials).then(unwrap),
  getMe: () => 
    USE_MOCK ? wrapMock({ name: 'Admin', email: 'admin@appnity.com', role: 'admin' }) : api.get('/admin/auth/me').then(unwrap),
  getDashboardStats: () => 
    USE_MOCK ? wrapMock({ total_leads: 15, total_portfolios: 8, active_team: 5 }) : api.get('/admin/dashboard/stats').then(unwrap),
  
  // Contacts/Leads
  getContacts: () => USE_MOCK ? wrapMock([]) : api.get('/admin/contacts').then(unwrap),
  updateContactStatus: (id: string, status: string) => 
    USE_MOCK ? wrapMock({ success: true }) : api.put(`/admin/contacts/${id}`, { status }).then(res => res.data),
  deleteContact: (id: string) => 
    USE_MOCK ? wrapMock({ success: true }) : api.delete(`/admin/contacts/${id}`).then(res => res.data),

  // Portfolios
  getPortfolios: () => USE_MOCK ? wrapMock(mockData.portfolios) : api.get('/admin/portfolios').then(unwrap),
  createPortfolio: (data: any) => 
    USE_MOCK ? wrapMock({ success: true, data: { ...data, id: Date.now().toString() } }) : api.post('/admin/portfolios', data).then(res => res.data),
  updatePortfolio: (id: string, data: any) => 
    USE_MOCK ? wrapMock({ success: true, data }) : api.put(`/admin/portfolios/${id}`, data).then(res => res.data),
  deletePortfolio: (id: string) => 
    USE_MOCK ? wrapMock({ success: true }) : api.delete(`/admin/portfolios/${id}`).then(res => res.data),

  // Team
  getTeam: () => USE_MOCK ? wrapMock(mockData.team) : api.get('/admin/team').then(unwrap),
  createTeamMember: (data: any) => 
    USE_MOCK ? wrapMock({ success: true, data: { ...data, id: Date.now().toString() } }) : api.post('/admin/team', data).then(res => res.data),
  updateTeamMember: (id: string, data: any) => 
    USE_MOCK ? wrapMock({ success: true, data }) : api.put(`/admin/team/${id}`, data).then(res => res.data),
  deleteTeamMember: (id: string) => 
    USE_MOCK ? wrapMock({ success: true }) : api.delete(`/admin/team/${id}`).then(res => res.data),

  // Services
  getServices: () => USE_MOCK ? wrapMock(mockData.services) : api.get('/admin/services').then(unwrap),
  createService: (data: any) => 
    USE_MOCK ? wrapMock({ success: true, data: { ...data, id: Date.now().toString() } }) : api.post('/admin/services', data).then(res => res.data),
  updateService: (id: string, data: any) => 
    USE_MOCK ? wrapMock({ success: true, data }) : api.put(`/admin/services/${id}`, data).then(res => res.data),
  deleteService: (id: string) => 
    USE_MOCK ? wrapMock({ success: true }) : api.delete(`/admin/services/${id}`).then(res => res.data),
};

export default api;

