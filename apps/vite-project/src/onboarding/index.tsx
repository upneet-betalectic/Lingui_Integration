import React, { useEffect, useState } from 'react'
import withTranslations from '../withTranslation';
import { Plural, t, Trans } from "@lingui/macro"
import { i18n } from '../i18n';

const Onboarding = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("onboarding_____________________");
    }, []);

    const favoriteColors = [ t`Red`, t`Orange`, t`Yellow`, t`Green`];

    const lastLogin = new Date();
    
  return (
    <div className='p-4 my-6 grid'>
        <div className="flex items-center gap-6 justify-center">
          <a className="hover:text-primary" href="/">
            <Trans> Home</Trans>
          </a>
          <h1><Trans>Onboarding</Trans></h1>
        </div>
        
        <div className='grid grid-flow-col  '>
            <p>
                <Trans id="msg.header">LinguiJS example</Trans>
            </p>
            <p>
                <Trans>Hello {"John"}</Trans>
            </p>
            <p>
                <Trans id="msg.hello">Hello all!!!</Trans>
            </p>
            <p>
                <Trans id="msg.welcome">Hello all!!!</Trans>
            </p>

            <ul>
            {favoriteColors.map(color => <p key={color}> {i18n._(color)}</p>)}
            </ul>
        </div>
            
        <p>
            <button onClick={()=>{
                setCount((prev)=>prev+1);
                }}>
                <Trans>Click</Trans>
            </button>
            <Plural
            // id='message_count'
            value={count}
            // _0={"There are no messages"}
            one={"There's # message in your inbox"}
            other={"There are # messages in your inbox"}/>
        </p>

        <div>    
            <Trans>
            Last login on {i18n.date(lastLogin)}.
            </Trans>
        </div>
    </div>
  )
}

export default withTranslations(Onboarding,'onboarding');