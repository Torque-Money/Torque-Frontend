import { Container } from "@mantine/core";

export default function VaultV1({}: {}) {
    // **** I need some way of getting a list of tokens that the user can use
    // **** When they click on the vault it will toggle the modal which will show all of the options they have to interact with the vault
    // **** Should also be some sort of agreement

    return (
        <>
            <Container
                p="xl"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
                    border: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
                    borderRadius: theme.radius.md,
                    cursor: "pointer",

                    "&:hover": {
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
                        border: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
                    },
                })}
            >
                Hello
            </Container>
        </>
    );
}
