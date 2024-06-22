import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaylistListRelationFilter } from "../playlist/PlaylistListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { TrackListRelationFilter } from "../track/TrackListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  playlists?: PlaylistListRelationFilter;
  subscriptions?: SubscriptionListRelationFilter;
  tracks?: TrackListRelationFilter;
  username?: StringFilter;
};
