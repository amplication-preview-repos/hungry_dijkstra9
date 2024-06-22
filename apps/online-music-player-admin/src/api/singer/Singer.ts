import { Track } from "../track/Track";
import { User } from "../user/User";

export type Singer = {
  bio: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  photoUrl: string | null;
  track?: Track | null;
  updatedAt: Date;
  user?: User | null;
};
