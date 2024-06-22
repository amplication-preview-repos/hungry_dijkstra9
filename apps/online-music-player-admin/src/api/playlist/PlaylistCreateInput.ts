import { TrackCreateNestedManyWithoutPlaylistsInput } from "./TrackCreateNestedManyWithoutPlaylistsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaylistCreateInput = {
  description?: string | null;
  name?: string | null;
  tracks?: TrackCreateNestedManyWithoutPlaylistsInput;
  user?: UserWhereUniqueInput | null;
};
