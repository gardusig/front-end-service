import { useCallback, useEffect, useState } from "react";

type EntityWithId = { id: string };

type UseEntityContextProps<T extends EntityWithId> = {
  listFn: () => Promise<T[]>;
  createFn: (entity: T) => Promise<T>;
  updateFn: (id: string, entity: T) => Promise<T>;
  deleteFn: (id: string) => Promise<void>;
  defaultEntity: T;
};

type EntityContextValue<T extends EntityWithId> = {
  entities: Record<string, T>;
  loading: boolean;
  error: string | null;
  getEntity: (id: string) => T;
  createOrUpdateEntity: (entity: T) => void;
  removeEntity: (id: string) => void;
  fetchAllEntities: () => void;
};

export function useEntityContext<T extends EntityWithId>({
  listFn,
  createFn,
  updateFn,
  deleteFn,
  defaultEntity,
}: UseEntityContextProps<T>): EntityContextValue<T> {
  const [entities, setEntities] = useState<Record<string, T>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllEntities = useCallback(() => {
    setLoading(true);
    setError(null);

    listFn()
      .then((list) => {
        const record: Record<string, T> = {};
        list.forEach((item) => {
          record[item.id] = item;
        });
        setEntities(record);
      })
      .catch((err) => {
        console.error("Failed to list entities:", err);
        setError("Failed to fetch entities.");
      })
      .finally(() => setLoading(false));
  }, [listFn]);

  const createOrUpdateEntity = useCallback(
    (entity: T) => {
      setLoading(true);
      const operation = entities[entity.id]
        ? updateFn(entity.id, entity)
        : createFn(entity);

      operation
        .then(fetchAllEntities)
        .catch((err) => {
          console.error("Failed to save entity:", err);
          setError("Failed to save entity.");
        })
        .finally(() => setLoading(false));
    },
    [entities, createFn, updateFn, fetchAllEntities]
  );

  const removeEntity = useCallback(
    (id: string) => {
      setLoading(true);
      deleteFn(id)
        .then(fetchAllEntities)
        .catch((err) => {
          console.error("Failed to delete entity:", err);
          setError("Failed to delete entity.");
        })
        .finally(() => setLoading(false));
    },
    [deleteFn, fetchAllEntities]
  );

  const getEntity = useCallback(
    (id: string): T => {
      return entities[id] ?? defaultEntity;
    },
    [entities, defaultEntity]
  );

  useEffect(() => {
    fetchAllEntities();
  }, [fetchAllEntities]);

  return {
    entities,
    loading,
    error,
    getEntity,
    createOrUpdateEntity,
    removeEntity,
    fetchAllEntities,
  };
}
