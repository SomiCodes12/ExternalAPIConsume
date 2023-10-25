import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const count = atomWithStorage("stateCount" , 1);
const user = atomWithStorage("mainUser" , {});
const token = atomWithStorage("userToken" , {});

export const useCount = () => {
    return useAtom(count)
}

export const useMainUser = () => {
    return useAtom(user)
}

export const useUserToken = () => {
    return useAtom(token)
}