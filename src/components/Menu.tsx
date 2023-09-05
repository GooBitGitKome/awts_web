import Link from 'next/link'

export default function Menu()
{
    return(
        <div>
            <ul>
                <li>Blockchain Tutorials
                    <ul className="list_triangle">
                        <Link href="https://cryptozombies.io/">Crypto Zombies</Link>
                        <li>その他のチュートリアル</li>
                    </ul>
                </li>
                <Link href="/pages/member">Member</Link>
                <li>Show-case
                    <ul>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </li>
                <li>Web3を使用する準備
                    <ul>
                        <li>Matamask install</li>
                        <li>Test network設定</li>
                    </ul>
                </li>
            </ul>

        </div>
    )
}