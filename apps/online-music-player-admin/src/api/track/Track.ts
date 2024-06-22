import { Playlist } from "../playlist/Playlist";
import { Singer } from "../singer/Singer";
import { User } from "../user/User";

export type Track = {
  album: string | null;
  artist: string | null;
  createdAt: Date;
  duration: number | null;
  genre: string | null;
  id: string;
  playlist?: Playlist | null;
  singers?: Array<Singer>;
  title: string | null;
  updatedAt: Date;
  url: string | null;
  user?: User | null;
};
