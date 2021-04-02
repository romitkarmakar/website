interface StorageState {
  ttl: number;
  item: any;
  version: string;
}

export const setItem = (name: string, item: any, ttl: number): boolean => {
  if (ttl == 0) {
    ttl = Date.now() + 1 * 24 * 60 * 60 * 1000; // 1 day expiry
  }
  let state: StorageState = {
    item: item,
    ttl: ttl,
    version: "1",
  };
  try {
    localStorage.setItem(name, JSON.stringify(state));
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getItem = (name: string): any | null => {
  let rawItem = localStorage.getItem(name);
  if (rawItem != null) {
    let state = JSON.parse(rawItem);
    if (Date.now() > state.ttl) {
      return null;
    }
    if (state.version != "1") return null;
    return state.item;
  }

  return null;
};
