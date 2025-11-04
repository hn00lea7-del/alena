import { z } from "zod";

export const galleryPasswordSchema = z.object({
  password: z.string().min(1, "Password tidak boleh kosong"),
});

export type GalleryPassword = z.infer<typeof galleryPasswordSchema>;

export interface GalleryPhoto {
  id: number;
  imageUrl: string;
  caption: string;
}
