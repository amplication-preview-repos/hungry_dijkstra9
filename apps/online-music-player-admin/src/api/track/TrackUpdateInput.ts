import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { SingerUpdateManyWithoutTracksInput } from "./SingerUpdateManyWithoutTracksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackUpdateInput = {
  album?: string | null;
  artist?: string | null;
  duration?: number | null;
  genre?: string | null;
  playlist?: PlaylistWhereUniqueInput | null;
  singers?: SingerUpdateManyWithoutTracksInput;
  title?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
