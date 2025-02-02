export interface SearchProps {
  getSearch: (newValue: string) => void;
}

export interface SearchState {
  inputValue: string;
}
