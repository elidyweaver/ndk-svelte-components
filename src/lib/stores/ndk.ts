import { writable } from "svelte/store";
import NDK from "@nostr-dev-kit/ndk";

const _ndk = new NDK({
    explicitRelayUrls: [
        "wss://relay.f7z.io",
        "wss://nos.lol",
        "wss://relay.damus.io",
        "wss://relay.snort.social",
    ],
});

export default writable(_ndk);
