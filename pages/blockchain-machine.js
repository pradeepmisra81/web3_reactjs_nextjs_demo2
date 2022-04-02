import Head from 'next/head';
import Web3 from 'web3';
import styles from '../styles/BlockchainMachine.module.css';
import 'bulma/css/bulma.css';

const BlockchainMachine = () => {
    
    const connectionHandler = () => {
        let web3;
        if( typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            window.ethereum.request({ method: "eth_requestAccounts"});
            web3 = new Web3(window.ethereum);
        } else {
            console.log('Please install MetaMask');
        }
    }

    return (
        <div className={styles.main}>
            <Head>
            <title>BlockchainMachine App</title>
            <meta name="description" content="Blockchain machine app" />
            </Head>
            <nav className='navbar mt-4 mb-4'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <h1>Blockchain Machine</h1>
                    </div>
                    <div className='navbar-end'>
                        <button className='button is-primary' onClick={connectionHandler}>
                            Connect Wallet
                        </button>
                    </div>

                </div>
            </nav>
            <section>
                <div className='container'>
                    <p>placeholder text</p>
                </div>
            </section>
        </div>
    )
}

export default BlockchainMachine;