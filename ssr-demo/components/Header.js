import Link from 'next/link'

function Header() {
    return (
        <div>
            <h2>Header</h2>
            <Link href="/about">about</Link>
        </div>
    );
}

export default Header;