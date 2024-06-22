import { Playlist } from "../playlist/Playlist";
import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";
import { Track } from "../track/Track";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  playlists?: Array<Playlist>;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
  tracks?: Array<Track>;
  updatedAt: Date;
  username: string;
};
