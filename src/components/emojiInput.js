import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

const EmojiInput = () => {
    const refInput = useRef(null)

    return (
        <div>
            <input ref={refInput} />
            <EmojiPicker ref={refInput} />
        </div>
    );
};

export default EmojiInput;