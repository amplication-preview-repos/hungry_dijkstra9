import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackCreateInput = {
  album?: string | null;
  artist?: string | null;
  duration?: number | null;
  genre?: string | null;
  playlist?: PlaylistWhereUniqueInput | null;
  title?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
