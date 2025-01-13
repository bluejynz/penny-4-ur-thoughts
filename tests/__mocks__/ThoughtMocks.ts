const too_many_chars_mock = {
    request_body: {
        author: "300 caracteres",
        saying: "A creative mind can explore endless possibilities, weaving dreams and ideas into a tapestry of innovation. Embrace challenges as opportunities to grow, allowing each step forward to reveal new horizons. Through perseverance, collaboration, and a spark of imagination, incredible things can be achieved. Stay curious and inspired!",
    },
    expected_response: {
        error_code: 400,
        response: {
            message: "Thought must not exceed 256 characters.",
        },
    },
};

const empty_author_mock = {
    request_body: {
        author: "",
        saying: "A creative mind can explore endless possibilities, weaving dreams and ideas into a tapestry of innovation. Embrace challenges as opportunities to grow, allowing each step forward to reveal new horizons. Through perseverance, collaboration, and a spark of imagination, incredible things can be achieved. Stay curious and inspired!",
    },
    expected_response: {
        error_code: 400,
        response: {
            message: "Author cannot be empty.",
        },
    },
};

const empty_saying_mock = {
    request_body: {
        author: "Empty saying",
        saying: "",
    },
    expected_response: {
        error_code: 400,
        response: {
            message: "Saying cannot be empty.",
        },
    },
};

const created_sucessfully_mock = {
    request_body: {
        author: "Sucessful",
        saying: "Sometimes, we find strength in the very things we thought would break us.",
    },
    expected_response: {
        error_code: 201,
        response: {
            id: "6784709cf7f1d0b6fe05b8e9",
            author: "Sucessful",
            saying: "Sometimes, we find strength in the very things we thought would break us.",
            created_at: "2025-01-13T01:47:08.074Z",
            updated_at: "2025-01-13T01:47:08.074Z",
        },
    },
};

export {
    too_many_chars_mock,
    empty_author_mock,
    empty_saying_mock,
    created_sucessfully_mock,
};
