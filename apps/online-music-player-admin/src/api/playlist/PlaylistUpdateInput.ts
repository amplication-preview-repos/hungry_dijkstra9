import { TrackUpdateManyWithoutPlaylistsInput } from "./TrackUpdateManyWithoutPlaylistsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaylistUpdateInput = {
  description?: string | null;
  name?: string | null;
  tracks?: TrackUpdateManyWithoutPlaylistsInput;
  user?: UserWhereUniqueInput | null;
};
