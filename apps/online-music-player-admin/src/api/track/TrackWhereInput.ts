import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { SingerListRelationFilter } from "../singer/SingerListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackWhereInput = {
  album?: StringNullableFilter;
  artist?: StringNullableFilter;
  duration?: IntNullableFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  playlist?: PlaylistWhereUniqueInput;
  singers?: SingerListRelationFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
