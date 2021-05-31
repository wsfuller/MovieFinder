/** Typed defined hooks to use with Redux https://redux.js.org/recipes/usage-with-typescript#define-typed-hooks */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootStore } from '../../redux/Store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export { useAppDispatch, useAppSelector };
