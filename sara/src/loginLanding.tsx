import { useKeycloak } from '@react-keycloak/web'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginLanding(){
    const { keycloak, initialized } = useKeycloak()
    const navigate = useNavigate()

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <h1>Resume Bundler</h1>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-12">
                    {(keycloak.authenticated && initialized) ?
                        <div>
                            <>
                            <p>Logged In... Loading</p>
                            {navigate('/')}
                            </>
                        </div>
                        :
                        <div>
                            <p><button type="button" className="btn btn-lg btn-primary" onClick={() => keycloak.login()}>Ministry Staff Login</button><br /><br /><br /></p>
                            <p><button type="button" className="btn btn-lg btn-primary" onClick={() => keycloak.login({ idpHint: 'bceid-basic-and-business' })}>Service Provider Login</button><br /></p>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginLanding