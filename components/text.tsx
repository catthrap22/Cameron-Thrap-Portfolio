// app/page.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function TypeScriptPage() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1>TypeScript Implementation</h1>
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faCheckCircle} color="green" />
        </main>
    );
}

// components/IconButton.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the core type definition
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconButtonProps {
    label: string;
    icon: IconDefinition; // Strongly type your icon prop here
    onClick: () => void;
}

export default function IconButton({ label, icon, onClick }: IconButtonProps) {
    return (
        <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
        </button>
    );
}

import IconButton from '@/components/IconButton';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Inside your parent component:
<IconButton
    label="Email Us"
    icon={faEnvelope}
    onClick={() => console.log('Clicked!')}
/>


// CAM"S INFO!


// Coast To Coast Talent Group
// Director of Voiceover
// 3350 Barham Blvd.
//     Los Angeles, CA 90068

<FontAwesomeIcon icon={byPrefixAndName.fab['imdb']} />

<FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} />
<FontAwesomeIcon icon={byPrefixAndName.fab['square-facebook']} />
<FontAwesomeIcon icon={byPrefixAndName.fab['instagram']} />
