export interface IStorage {
  verifyGalleryPassword(password: string): boolean;
}

export class MemStorage implements IStorage {
  private readonly correctPassword = "mommy";

  verifyGalleryPassword(password: string): boolean {
    return password.toLowerCase() === this.correctPassword;
  }
}

export const storage = new MemStorage();
