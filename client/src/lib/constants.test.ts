import { describe, it, expect } from 'vitest';
import {
  CONTACT_INFO,
  SOCIAL_MEDIA,
  GOOGLE_MAPS,
  WHATSAPP_MESSAGES,
  SERVICES,
  GALLERY_IMAGES,
} from './constants';

describe('Constants', () => {
  describe('CONTACT_INFO', () => {
    it('should have valid WhatsApp number', () => {
      expect(CONTACT_INFO.whatsapp).toMatch(/^\d+$/);
      expect(CONTACT_INFO.whatsapp.length).toBeGreaterThan(10);
    });

    it('should have valid email', () => {
      expect(CONTACT_INFO.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('should have valid address', () => {
      expect(CONTACT_INFO.address).toContain('Itambé');
      expect(CONTACT_INFO.address).toContain('São José dos Campos');
    });
  });

  describe('SOCIAL_MEDIA', () => {
    it('should have all social media links', () => {
      expect(SOCIAL_MEDIA.instagram).toBeDefined();
      expect(SOCIAL_MEDIA.facebook).toBeDefined();
      expect(SOCIAL_MEDIA.linkedin).toBeDefined();
      expect(SOCIAL_MEDIA.youtube).toBeDefined();
    });

    it('should have valid URLs', () => {
      Object.values(SOCIAL_MEDIA).forEach(url => {
        expect(url).toMatch(/^https?:\/\//);
      });
    });
  });

  describe('GOOGLE_MAPS', () => {
    it('should have embed URL', () => {
      expect(GOOGLE_MAPS.embedUrl).toContain('google.com/maps/embed');
    });

    it('should have maps link', () => {
      expect(GOOGLE_MAPS.mapsLink).toContain('maps');
    });
  });

  describe('WHATSAPP_MESSAGES', () => {
    it('should have all message templates', () => {
      expect(WHATSAPP_MESSAGES.floatingButton).toBeDefined();
      expect(WHATSAPP_MESSAGES.contact).toBeDefined();
      expect(WHATSAPP_MESSAGES.nutritionClinical).toBeDefined();
      expect(WHATSAPP_MESSAGES.nutritionSports).toBeDefined();
    });

    it('should have non-empty messages', () => {
      Object.values(WHATSAPP_MESSAGES).forEach(message => {
        expect(message.length).toBeGreaterThan(0);
      });
    });
  });

  describe('SERVICES', () => {
    it('should have at least 5 services', () => {
      expect(SERVICES.length).toBeGreaterThanOrEqual(5);
    });

    it('should have required service properties', () => {
      SERVICES.forEach(service => {
        expect(service).toHaveProperty('id');
        expect(service).toHaveProperty('title');
        expect(service).toHaveProperty('description');
        expect(service).toHaveProperty('icon');
      });
    });
  });

  describe('GALLERY_IMAGES', () => {
    it('should have 37 gallery images', () => {
      expect(GALLERY_IMAGES.length).toBe(37);
    });

    it('should have valid image properties', () => {
      GALLERY_IMAGES.forEach((image, index) => {
        expect(image.id).toBe(index + 1);
        expect(image.src).toContain('/assets/images/');
        expect(image.alt).toBeDefined();
      });
    });
  });
});
