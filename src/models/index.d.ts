import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ResourceNames {
  BRICK = "BRICK",
  ROCK = "ROCK"
}

type EagerResources = {
  readonly brick?: number | null;
  readonly rock?: number | null;
}

type LazyResources = {
  readonly brick?: number | null;
  readonly rock?: number | null;
}

export declare type Resources = LazyLoading extends LazyLoadingDisabled ? EagerResources : LazyResources

export declare const Resources: (new (init: ModelInit<Resources>) => Resources)

type EagerPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nickname?: string | null;
  readonly resource?: Resources | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nickname?: string | null;
  readonly resource?: Resources | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}