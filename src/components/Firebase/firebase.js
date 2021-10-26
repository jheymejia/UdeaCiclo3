import app from 'firebase/compat';
import 'firebase/auth';
import 'firebase/database';


import axios from "axios";


const config = {
  apiKey: "AIzaSyAoTojhikXEzcCTDyzUBQLPckcDHmIihTI",
  authDomain: "postic-607ec.firebaseapp.com",
  projectId: "postic-607ec",
  storageBucket: "postic-607ec.appspot.com",
  messagingSenderId: "554417543138",
  appId: "1:554417543138:web:0786a102d8ca70ceed0bbb",
  measurementId: "G-CTBCVYYNST"

};

class Firebase {
  constructor(props) {
    app.initializeApp(config);
    const baseUrl = "http://localhost:3001/api/postic/user";


    const usuarioSeleccionado = {

      idUser: "",
      nombreCompleto: "",
      urlFotoUsuario: "",
      emailUsuario: "",
      emailVerificadoUsuario: "",
      rolUsuario: "",
      estadoUsuario: "",



    }
    this.state = {
      newUser: async () => {
        try {
          this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
              this.user(authUser.uid)
                .once('value')
                .then(snapshot => {
                  const dbUser = snapshot.val();
                  ///verificar que se muestre dbuser de firebase
                  authUser = {
                    uid: authUser.uid,
                    displayName: authUser.displayName,
                    photoURL: authUser.photoURL,
                    email: authUser.email,
                    emailVerified: authUser.emailVerified,
                    providerData: authUser.providerData,
                    ...dbUser
                  };



                  usuarioSeleccionado.idUser = authUser.uid;
                  if (authUser.displayName) {
                  usuarioSeleccionado.nombreCompleto = authUser.displayName;
                  }
                  usuarioSeleccionado.urlFotoUsuario = "no tiene";
                  if (authUser.photoURL) {
                    usuarioSeleccionado.urlFotoUsuario = authUser.photoURL;
                  }

                  usuarioSeleccionado.emailUsuario = authUser.email;
                  usuarioSeleccionado.emailVerificadoUsuario = authUser.emailVerified;
                  usuarioSeleccionado.rolUsuario = "Cliente";
                  usuarioSeleccionado.estadoUsuario = "Activo";




                });


            }
          }


          )


          await axios.post(baseUrl + "/new", usuarioSeleccionado);

        } catch (error) {

        }
      },
      updatechange: async () => {

        this.auth.onAuthStateChanged(authUser => {
          if (authUser) {
            try {
              var regex = new RegExp("\'", "g");
              var res = authUser.email.replace(regex, "");
              axios.put(
                baseUrl + "/updatechange/" + authUser.email,
                usuarioSeleccionado
              );
            } catch (error) {

            }

          }
        });

      },

    };
    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();
    /* Social Sign In Method Provider */
    this.googleProvider = new app.auth.GoogleAuthProvider();




  }
  componentDidMount() {

  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: "https://postic-607ec.firebaseapp.com",
    });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>

    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
            ///verificar que se muestre dbuser de firebase
            authUser = {
              uid: authUser.uid,
              displayName: authUser.displayName,
              photoURL: authUser.photoURL,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser
            };

            next(authUser);
          });
          this.db.ref('users/' + authUser.uid).set({
            displayName:authUser.displayName ,
            email: authUser.email,
          });
        this.state.newUser();
        this.state.updatechange();

      } else {
        fallback();
      }

    });

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Message API ***

  message = uid => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref('messages');
}

export default Firebase;
