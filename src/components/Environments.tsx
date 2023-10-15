import Image from 'next/image'
import _Link from 'next/link'
import {Link} from "@nextui-org/react"
import metamask_logo from '../../pic/metamask_logo.png'
import sepolia_logo from '../../pic/sepolia.png'
import mumbai_logo from '../../pic/Mumbai.png'
import goerli_logo from '../../pic/Goerli.png'

export default function Environments() {
    return (
        <div>
          <h1 className='flex flex-col items-center text-5xl m-10 relative top-20'>Environments</h1>
          <div className='flex flex-col p-10'>
            <article className='w-[80%]'>
              <h2 className='text-3xl mt-20 mb-2'>Metamask</h2>
              <div className='flex flex-col'>
                  <div>Metamaskは下記のリンクをクリックするとインストールページに飛びます。お使いの端末にあわせて、作業を進めてください。</div>
                  <div className='flex flex-row'>
                  <Link
                    isExternal 
                    href="https://metamask.io/download/" 
                    showAnchorIcon
                    className="mt-3"
                  >
                    Metamaskへ
                  </Link>
                  <Image className='p-2' src={metamask_logo} width={70} height={50} alt='' />
                  </div>
              </div>
            </article>


            <article className='w-[80%]'>
              <h2 className='text-3xl mt-10'>Faucet</h2>
              <div className='flex flex-col'>
                <div>
                  Metamask上でお金を送金したり、入金したりするときに、手数料のようなかたちでガス代が発生します。そのガス代を払えるように、お金を入手しましょう。<br/>
                  下記のサイトで自分のMetamaskアドレスを入力すると、テストネットワーク用のお金がもらえます。
                </div>

                <div className='flex flex-row'>
                  <Link
                    isExternal 
                    href="https://sepoliafaucet.com/" 
                    showAnchorIcon
                    className="mt-3"
                  >
                    Sepolia Faucet
                  </Link> 
                  <Image className='p-2 relative top-1' src={sepolia_logo} width={50} height={50} alt='' />
                </div>

                <div className='flex flex-row'>
                  <Link
                    isExternal 
                    href="https://mumbaifaucet.com/" 
                    showAnchorIcon
                    className="mt-3"
                  >
                    Mumbai Faucet
                  </Link> 
                  <Image className='p-2 relative top-1' src={mumbai_logo} width={40} height={40} alt='' />
                </div>

                <div className='flex flex-row'>
                  <Link
                    isExternal 
                    href="https://goerlifaucet.com/" 
                    showAnchorIcon
                    className="mt-3"
                  >
                    Goerli Faucet
                  </Link>
                  <Image className='p-2 relative top-1' src={goerli_logo} width={40} height={40} alt='' />
                </div>

              </div>            
            </article>

          </div>
        </div>
    )
  }
  