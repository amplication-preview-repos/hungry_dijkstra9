import { Track } from "../track/Track";
import { User } from "../user/User";

export type Playlist = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  tracks?: Array<Track>;
  updatedAt: Date;
  user?: User | null;
};
