interface Placeholder {
    title: string;
    body: string;
}

export default function Banner({ placeholders }: { placeholders: Placeholder[] }) {
    return (
        <div className="bg-neutral-900 px-16 py-8 flex items-center justify-evenly rounded-xl shadow-md shadow-fuchsia-500 my-16">
            {placeholders.map((placeholder) => (
                <div className="text-center">
                    <h2 className="text-neutral-500 font-bold text-xl">{placeholder.title}</h2>
                    <p className="text-white font-bold text-3xl">{placeholder.body}</p>
                </div>
            ))}
        </div>
    );
}
