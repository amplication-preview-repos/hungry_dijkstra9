import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { SingerCreateNestedManyWithoutTracksInput } from "./SingerCreateNestedManyWithoutTracksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackCreateInput = {
  album?: string | null;
  artist?: string | null;
  duration?: number | null;
  genre?: string | null;
  playlist?: PlaylistWhereUniqueInput | null;
  singers?: SingerCreateNestedManyWithoutTracksInput;
  title?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
