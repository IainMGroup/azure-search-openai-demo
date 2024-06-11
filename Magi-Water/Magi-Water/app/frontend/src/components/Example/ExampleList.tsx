import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Tell me about Morrison Water Services?",
    "What are the key aspects of Smart Metering?",
    "What are the key SLA's and KIP's associated with Smart Metering?"
];

const GPT4V_EXAMPLES: string[] = [
    "What was the average fuel and co2 in 2023",
    "What are specification for an all electric E-Transit?",
    "What fuel stations can i use my fuel card?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
