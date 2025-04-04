import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, service, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
      }
      
      // Store the submission (in a real app, this would persist to a database)
      // Here we'll just log it since we're using in-memory storage
      console.log('Contact form submission:', {
        name,
        email,
        company,
        service,
        message,
        timestamp: new Date().toISOString()
      });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Your message has been received. We will contact you shortly.' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
