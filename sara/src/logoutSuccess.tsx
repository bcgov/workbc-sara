import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

function LogoutSuccess(props: any) {
    let navigate = useNavigate();
    const { keycloak } = useKeycloak();
    
    return(
        <div className="container">
            { !keycloak.authenticated &&
                <div className="col-md-12 mt-5">
                        <div className="row">
                            <h1>You have successfully logged out of the WorkBC Resume Bundler.</h1>   
                        </div>
                    <div className="row">
                        <button 
                            className="btn btn-outline-primary mr-5"
                            type="button"
                            onClick={
                                () => {
                                    navigate("/");
                                }
                            }> 
                            Return to Home Page
                        </button>
                    </div>
                </div>
            }
            { keycloak.authenticated &&
                <div style={{display: "flex", justifyContent: "center"}}>
                </div>
            }
        </div>
    );
}

export default LogoutSuccess