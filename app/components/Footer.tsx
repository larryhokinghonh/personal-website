import Link from 'next/link';

export default function Footer() {
    return (
        <>
        <div className="flex flex-row items-start p-8 mb-6">
            <Link target="_blank" href="https://github.com/larryhokinghonh">
                <p className=" pr-6 underline">github</p>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/larryhkh/">
                <p className=" pr-6 underline">linkedin</p>
            </Link>
        </div>
        </>
    )
}