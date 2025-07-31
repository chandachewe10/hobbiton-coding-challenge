import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import '../../assets/styles/addClients.css'
import Header from '../../components/header/Header'
import { authentication, db } from '../../helpers/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useForm } from '../../hooks/useForm'
import Loader from '../../components/Loader'
import PasswordGenerator from '../../components/PasswordGenerator'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Chat from '../../components/messenger/Chat'

// firebase storage..
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../helpers/firebase'
import '../../styles/ctas.css'

export default function AddOrganisation({parent_container}) {

    useEffect(() => { document.title = 'Add Organisations - HOBBITON'}, [])

    const [ isLoading, setIsLoading ] = useState(false)
    const [ password, setPassword ] = useState('')
    // initialising the logs doc.
    const logCollectionRef = collection(db, "logs");
    const [ logo, setLogo ] = useState('')

    const organisationsCollectionRef = collection(db, 'organisations')
    const [fields, handleFieldChange] = useForm({
        uid: authentication.currentUser.uid,
        category: '',
        name: '',
        org_email: '',
        tel: '',
        address: '',
        logo: '',
        role: '',
        title: '',
        contactName: '',
        contactPhoneNumber: '',
        contact_email: '',
        password: ''

    })

    const [ url, setUrl ] = useState('')
//       const [ logo, setLogo ] = useState(null)
      const [ progress, setProgress ] = useState(0)
    

        const createOrganisation = async (event) => {
                setIsLoading(true)
                event.preventDefault()
                        // fields.logo = url
                        fields.password = password 

                        if(logo){
                                const storageRef = ref(storage, `images/${logo.name}`)
                                console.log(storageRef)
                                const uploadTask = uploadBytesResumable(storageRef, logo)

                                uploadTask.on(
                                        "state_changed",
                                        (snapshot) => {
                                                const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
                                                setProgress(prog)
                                        },
                                        (error) => console.log(error), async () => {
                                                        await getDownloadURL(uploadTask.snapshot.ref)
                                                                .then((downloadUrl) => {
                                                        fields.logo = downloadUrl
                                                        })
                                                                .then(async () => {
                                                                        await addDoc(organisationsCollectionRef, fields)
                                                                        .then(() => {
                                                                                toast.success(`successfully added ${fields.name}`, {position: "top-center"})
                                                                        })
                                                                        .then(async () => {
                                                                                await addDoc(logCollectionRef, {
                                                                                        timeCreated: `${new Date().toISOString().slice(0, 10)} ${ new Date().getHours()}:${ new Date().getMinutes()}:${ new Date().getSeconds()}`,
                                                                                        type: 'organisation creation',
                                                                                        status: 'successful',
                                                                                        message: `Successfully created organisation: ${fields.name} by ${authentication.currentUser.displayName}`
                                                                                })
                                                                        })
                                                                        .then(() => {
                                                                                setIsLoading(false)
                                                                                document.form2.reset()
                                                                                setPassword('')
                                                                        })
                                                                        .catch(async () => {
                                                                                toast.error(`Failed: couldn't added ${fields.name}`, {position: "top-center"});

                                                                                await addDoc(logCollectionRef, {
                                                                                        timeCreated: `${new Date().toISOString().slice(0, 10)} ${ new Date().getHours()}:${ new Date().getMinutes()}:${ new Date().getSeconds()}`,
                                                                                        type: 'organisation creation',
                                                                                        status: 'failed',
                                                                                        message: `Failed to create organisation: ${fields.name} by ${authentication.currentUser.displayName}`
                                                                                })
                                                                                setIsLoading(false)
                                                                                document.form2.reset()
                                                                                setPassword('')
                                                                        })
                                                                })
                                        }
                                )
                        } else{
                                await addDoc(organisationsCollectionRef, fields)
                                .then(() => {
                                        toast.success(`successfully added ${fields.name}`, {position: "top-center"})
                                        setIsLoading(false)
                                        document.form2.reset()
                                        setPassword('')
                                })
                                .then(async () => {
                                        await addDoc(logCollectionRef, {
                                                timeCreated: `${new Date().toISOString().slice(0, 10)} ${ new Date().getHours()}:${ new Date().getMinutes()}:${ new Date().getSeconds()}`,
                                                type: 'organisation creation',
                                                status: 'successful',
                                                message: `Successfully created organisation: ${fields.name} by ${authentication.currentUser.displayName}`
                                        })
                                })
                                .catch(async () => {
                                        toast.error(`Failed: couldn't added ${fields.name}`, {position: "top-center"});
                                        setIsLoading(false)
                                        document.form2.reset()
                                        setPassword('')
                                        await addDoc(logCollectionRef, {
                                                timeCreated: `${new Date().toISOString().slice(0, 10)} ${ new Date().getHours()}:${ new Date().getMinutes()}:${ new Date().getSeconds()}`,
                                                type: 'organisation creation',
                                                status: 'failed',
                                                message: `Failed to create organisation: ${fields.name} by ${authentication.currentUser.displayName}`
                                        })
                                })
                        }             
                        
        }


    return (
        <div /* className='components' */>
            <Header title="Add Organisations" subtitle="ADD A NEW ORGANISATION" />
            <ToastContainer/>
            <div className="addComponentsData mb-5 shadow-sm">

                {isLoading && 
                        <div className='loader-wrapper'>
                                <Loader />
                        </div>
                }

                <div id="addForm">
                        <Form name='form2' onSubmit={createOrganisation}>
                            <div className='organisation-columns'>
                                <div style={{padding: "1rem", paddingRight: "3.5rem",borderRight: "1px solid rgba(198, 199, 200, 0.4)"}}>
                                    <p style={{color: "#76859a"}}>Organisation Details</p>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor='category'>Category <span className='required'>*</span></Form.Label>
                                            <Form.Select aria-label="User role" id='category' onChange={handleFieldChange}>
                                                <option value="hide">--Select Category--</option>
                                                <option value="mtp">Bank</option>
                                                <option value="comprehensive">Brokers</option>
                                                <option value="windscreen">MTN</option>
                                                <option value="windscreen">Shell</option>
                                                <option value="windscreen">others</option>
                                            </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor='name'>Organisation Name <span className='required'>*</span></Form.Label>
                                            <Form.Control type="text" id='name' placeholder="Enter organisation's name" onChange={handleFieldChange} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor='companyCode'>Company Code </Form.Label>
                                            <Form.Control type="text" id='companyCode' placeholder="Code" onChange={handleFieldChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor="org_email">Organisation Email <span className='required'>*</span></Form.Label>
                                            <Form.Control id="org_email" type="email" placeholder="Enter email" onChange={handleFieldChange} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor="tel">Telephone <span className='required'>*</span></Form.Label>
                                            <Form.Control id="tel" type="tel" placeholder="Phone Number" onChange={handleFieldChange} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor='address'>Address</Form.Label>
                                            <Form.Control id="address" placeholder="Enter organisation's address" onChange={handleFieldChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                            <Form.Label htmlFor='logo'>Upload Logo</Form.Label>
                                            <Form.Control id='logo' type="file" onChange={(event) => {
                                                //     uploadLogo(event.target.files[0])
                                                setLogo(event.target.files[0])
                                            }} />
                                            {progress}
                                    </Form.Group>
                                </div>
                                <div style={{padding: "1rem"}}>
                                    <p style={{color: "#76859a"}}>Contact's Details</p>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor='contactName'>Contact's Name <span className='required'>*</span></Form.Label>
                                            <Form.Control id='contactName' type="text" placeholder="Enter contact's name" onChange={handleFieldChange} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor='title'>Title</Form.Label>
                                            <Form.Control id='title' type="text" placeholder="e.g Mr./Mrs./Ms." onChange={handleFieldChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor='role'>Role</Form.Label>
                                            <Form.Control id='role' type="text" placeholder="Role" onChange={handleFieldChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor='contactPhoneNumber'>Contact Phone <span className='required'>*</span></Form.Label>
                                            <Form.Control id="contactPhoneNumber" type="tel" placeholder="Enter phone number" onChange={handleFieldChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                            <Form.Label htmlFor='contact_email'>Contact Email</Form.Label>
                                            <Form.Control id="contact_email" type="email" placeholder="Enter email" onChange={handleFieldChange} />
                                    </Form.Group>

                                    <PasswordGenerator password={password} setPassword={setPassword} />
                                </div>
                            </div>
                            <div id='submit' ><input type="submit" value="Submit" className='btn cta' /></div>
                        </Form>
                </div>
            </div>
            <div style={{width:"100%", position:"fixed", bottom:"0px", display:"flex", justifyContent:"flex-end"}} className={parent_container ? "chat-container" : "expanded-menu-chat-container"}>
              <Chat />
            </div> 
        </div>
    )
}
