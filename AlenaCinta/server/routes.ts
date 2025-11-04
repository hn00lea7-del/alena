import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { galleryPasswordSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/gallery/verify", async (req, res) => {
    try {
      const { password } = galleryPasswordSchema.parse(req.body);
      const isValid = storage.verifyGalleryPassword(password);
      
      res.json({ success: isValid });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: "Invalid request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
