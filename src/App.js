import React from "react";
import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Image,
  Columns,
  List,
  Text,
  Highlight,
  Video,
  Footer,
  Quote
} from "@sambego/diorama";

import Speedy from "./video/speedy.mp4";
import NPM from "./video/npm.mp4";

import cc from "./img/cc.svg";
import Sam from "./img/sam.png";
// import Poes from "./img/poes.jpg";
import hashing from "./img/hashing.svg";
import keyedHashing from "./img/keyed-hashing.svg";
import keyedHashingRightWrong from "./img/keyed-hashing-right-wrong.svg";
import keyedHashingDetail from "./img/keyed-hashing-detail.svg";
import signingUnhashed from "./img/signing-unhashed.svg";
import signing from "./img/signing.svg";
import verifyingUnhashed from "./img/verifying-unhashed.svg";
import verifying from "./img/verifying.svg";
// import encrypting from "./img/encrypting.svg";
// import decrypting from "./img/decrypting.svg";
import rsaKeyGeneration from "./img/rsa-key-generation.svg";
import rsaEncryption from "./img/rsa-encrypting.svg";
import rsaEncryptionSimple from "./img/rsa-encrypting-simple.svg";
import rsaDecryption from "./img/rsa-decrypting.svg";
import rsaEncryptionFade from "./img/rsa-encrypting-fade.svg";
import rsaDecryptionSimple from "./img/rsa-decrypting-simple.svg";
import rsaDecryptionFade from "./img/rsa-decrypting-fade.svg";
import simpleRsaDemo from "./img/simple-rsa-demo.png";
import rsaDemo from "./img/rsa-demo.png";
import jws from "./img/jws.svg";
import jwe from "./img/jwe.svg";
import jweHeader from "./img/jwe-header.svg";
import jweEncKey1 from "./img/jwe-enc-key-1.svg";
import jweEncKey2 from "./img/jwe-enc-key-2.svg";
import jweEncKey3 from "./img/jwe-enc-key-3.svg";
import jweDecrypt1 from "./img/jwe-decrypt-1.svg";
import jweDecrypt2 from "./img/jwe-decrypt-2.svg";
import jweDecrypt3 from "./img/jwe-decrypt-3.svg";
import jweDecrypt4 from "./img/jwe-decrypt-4.svg";
import jweDecrypt5 from "./img/jwe-decrypt-5.svg";
import cat from "./img/cat.svg";
import JWK from "./img/jwk.png";
import JWK2 from "./img/jwk2.png";
import JWSHeader from "./img/jws-header.svg";
import JWSPayload from "./img/jws-payload.svg";
import JWSSignature from "./img/jws-signature.svg";
import JWEKeyExpl1 from "./img/jwe-enc-expl-fade1.svg";
import JWEKeyExpl2 from "./img/jwe-enc-expl-fade2.svg";
import JWTHeader from "./img/jwt-header.svg";
import JWTAccess from "./img/jwt-access.svg";
import JWTId from "./img/jwt-id.svg";
import EncSym from "./img/sym-enc.svg";
import EncAsym from "./img/asym-enc.svg";
import JWSJSON from "./img/jws-json.svg";
import JWEJSON from "./img/jwe-json.svg";
import Salt from "./img/salt.svg";

function SlideDeck() {
  return (
    <Deck
      // presenterNotes
      footer={
        <Footer
          left={<Highlight color="#fac863">@sambego</Highlight>}
          right={<Highlight color="#fac863">jose.sambego.tech</Highlight>}
        />
      }
    >
      <Slide style={{ background: "#fac863", color: "#fff" }}>
        <Video
          src={Speedy}
          loop
          autoplay
          full
          color="#fac863"
          style={{ overflow: "hidden", zIndex: 1 }}
        />
        <Title style={{ color: "#ffffff", position: "relative", zIndex: 1 }}>
          No way, JOSE!
        </Title>
        <Image
          src={cc}
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            width: "10%",
            zIndex: 2,
          }}
          alt="Creative commons"
        />
      </Slide>
      <Slide notes="Security, Privacy, Payments, and Identity">
        <Columns>
          <div>
            <Image src={Sam} alt="A picture of me" full color="#fac863" />
          </div>
          <div>
            <Subtitle>Sam Bellen</Subtitle>
            <List>
              <li>Developer Advocate Engineer</li>
              <li>Auth0</li>
              <li>GDE</li>
              <li>@sambego</li>
            </List>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <video src={NPM} autoPlay style={{ height: "80vh" }}></video>
        <Text>
          <span style={{ fontFamily: "monospace" }}>npx @sambego/about-me</span>
        </Text>
      </Slide>
      {/* <Slide>
        <Image
          src={Poes}
          alt="I've got cat stickers, tweet me @sambego"
          full
          color="#fac863"
        />
        <Subtitle
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate3d(-50%, -50%, 0)",
            color: "#fff",
            margin: 0,
          }}
        >
          Tweet me @sambego
        </Subtitle>
      </Slide> */}
      <Slide>
        <Text>
          <strong>Disclaimer</strong>: I might{" "}
          <Highlight color="#fac863">
            simplify certain things to try explain them
          </Highlight>{" "}
          in an easier way.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <strong>Disclaimer</strong>: Don't reinvent the weel,{" "}
          <Highlight color="#fac863">
            use existing libraries and services
          </Highlight>{" "}
          when doing something cryptographic.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>Summary</Subtitle>
        <List>
          <li>(Keyed) Hashing</li>
          <li>Signing</li>
          <li>Encryption</li>
          <li>JOSE</li>
        </List>
      </Slide>

      {/* -- Start Hashing -- */}
      <Slide style={{ background: "#fac863" }}>
        <Subtitle style={{ letterSpacing: "4rem" }}>Hashing</Subtitle>
      </Slide>
      <Slide>
        <Text>
          A hashing algorithm is a mathematical algorithm that{" "}
          <Highlight color="#fac863">
            maps data of arbitrary size to a bit string of a fixed size
          </Highlight>{" "}
          .
        </Text>
      </Slide>
      <Slide>
        <Text>
          The initial data is often called the{" "}
          <Highlight color="#fac863">message</Highlight>. <br />
          The outcome of the hashing function is called the{" "}
          <Highlight color="#fac863">hash</Highlight> or{" "}
          <Highlight color="#fac863">message digest</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          Hashing is a <Highlight color="#fac863">one-way function</Highlight>,
          meaning it is practically impossible to invert.
        </Text>
      </Slide>
      <Slide notes="Show https://emn178.github.io/online-tools/sha256.html">
        <Image src={hashing} alt="A schema illustrating how hashing works" />
      </Slide>
      <Slide>
        <Subtitle>Hashing Algorithms</Subtitle>
        <Text>
          <Highlight color="#fac863">
            MD5, SHA-1, SHA-2, SHA-3, NTLM, LANMAN
          </Highlight>
        </Text>
      </Slide>
      <Slide style={{ background: "#fac863" }}>
        <Subtitle style={{ letterSpacing: "4rem" }}>Keyed hashing</Subtitle>
      </Slide>
      <Slide>
        <Text>
          Keyed hashes lets you validate{" "}
          <Highlight color="#fac863">the integrity and authenticity</Highlight>{" "}
          of the content of the hash.
        </Text>
      </Slide>
      <Slide>
        <Text>
          In order to compute a keyed hash you need a{" "}
          <Highlight color="#fac863">secret key</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Show: https://www.freeformatter.com/hmac-generator.html#ad-output">
        <Image
          src={keyedHashing}
          alt="A schema illustrating how hashing works"
        />
      </Slide>
      <Slide>
        <Image
          src={keyedHashingRightWrong}
          alt="A schema illustrating how hashing works"
        />
      </Slide>
      <Slide>
        <Image
          src={keyedHashingDetail}
          alt="A schema illustrating how hashing works"
        />
      </Slide>
      <Slide>
        <Subtitle>Keyed Hashing Algorithms</Subtitle>
        <Text>
          <Highlight color="#fac863">
            HMACSHA256, HMACSHA384, HMACSHA512
          </Highlight>
        </Text>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left", fontSize: "5rem" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            &nbsp;
          </Highlight>
          Keyed
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            H
          </Highlight>
          ash
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            M
          </Highlight>
          essage
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            A
          </Highlight>
          uthentication
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            C
          </Highlight>
          ode
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            S
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>ecure</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            H
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>ash</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            A
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>lgorithms</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "4rem", verticalAlign: "middle" }}>
              256
            </span>
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>Bit</span>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left", fontSize: "5rem" }}>
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            &nbsp;
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>Keyed</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            H
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>ash</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            M
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>essage</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            A
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>uthentication</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            C
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>ode</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            S
          </Highlight>
          ecure
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            H
          </Highlight>
          ash
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            A
          </Highlight>
          lgorithms
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "4rem", verticalAlign: "middle" }}>
              256
            </span>
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>Bit</span>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left", fontSize: "5rem" }}>
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            &nbsp;
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>Keyed</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            H
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>ash</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            M
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>essage</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            A
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>uthentication</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            C
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>ode</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            S
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>ecure</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            H
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>ash</span>
          <br />
          <Highlight
            color="#fde5b5"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            A
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>lgorithms</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "4rem", verticalAlign: "middle" }}>
              256
            </span>
          </Highlight>
          Bit
        </Subtitle>
      </Slide>

      <Slide>
        <Subtitle>
          (Keyed) Hashes are often used to{" "}
          <Highlight color="#fac863">store passwords</Highlight>.
        </Subtitle>
      </Slide>
      <Slide>
        <Text>When storing paswords, they are usually <Highlight color="#fac863">salted</Highlight> before they are hashed.</Text>
      </Slide>
      <Slide>
        <Text>This has the benefit of <Highlight color="#fac863">similar passwords not having the same hash</Highlight>, and makes <Highlight color="#fac863">rainbow tables useless</Highlight>.</Text>
      </Slide>
      <Slide>
        <Image src={Salt} alt="Salting schema" />
      </Slide>
      {/* -- End Hashing -- */}

      {/* -- Start Signing -- */}
      <Slide style={{ background: "#fac863" }}>
        <Subtitle style={{ letterSpacing: "4rem" }}>Signing</Subtitle>
      </Slide>
      <Slide notes="Integrity and authenticity">
        <Text>
          Digital signatures offer all properties of keyed hashes, plus{" "}
          <Highlight color="#fac863">cryptographic non-repudiation</Highlight>.
        </Text>
      </Slide>
      <Slide notes="This is a legal term. Example you buy something expensive with a cheque. Your signature on that cheque makes it 'impossible' for you to claim you did not write that cheque, and the bank will claim the money from you. (Real signatures can be easily forged, digital one not so much)">      
          <Quote style={{fontSize: '6rem'}} quotee="Wikipedia">Non-repudiation refers to a situation where a statement's <Highlight color="#fac863">author cannot successfully dispute its authorship or the validity</Highlight> of an associated contract.</Quote>
      </Slide>
      <Slide>
        <Text>
          Cryptographic non-repudiation{" "}
          <Highlight color="#fac863">can prove who created the signature</Highlight>.
        </Text>
      </Slide>
      <Slide notes="You can do that with HMAC as well, but need to share a secret. The more a secret is shared, the less secure it gets. Using a private/public key is better.">
        <Text>
          Cryptographic non-repudiation{" "}
          <Highlight color="#fac863">enables other parties</Highlight> than the
          signer to{" "}
          <Highlight color="#fac863">check the signature's validity</Highlight>.
        </Text>
      </Slide>
      <Slide notes="private/public keys">
        <Text>
          Digital signatures use{" "}
          <Highlight color="#fac863">public-key cryptography</Highlight>, or{" "}
          <Highlight color="#fac863">asymmetric cryptography</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          The signer{" "}
          <Highlight color="#fac863">
            creates the signature using a private key
          </Highlight>
          .
        </Text>
      </Slide>
      <Slide>
        <Text>
          The verifier can{" "}
          <Highlight color="#fac863">
            check the validity of the signature with a public key
          </Highlight>
          .
        </Text>
      </Slide>
      <Slide>
        <Text>
          A singing algorithm is usually a collection of 3 algorithms.
          <br />
          <Highlight color="#fac863">A key generator</Highlight>,{" "}
          <Highlight color="#fac863">a signing algorithm</Highlight> and{" "}
          <Highlight color="#fac863">a verifying algorithm</Highlight>
        </Text>
      </Slide>

      <Slide>
        <Image
          src={signingUnhashed}
          alt="A schema explaining how signing works"
        />
      </Slide>
      <Slide>
        <Image
          src={verifyingUnhashed}
          alt="A schema explaining how verifying works"
        />
      </Slide>
      <Slide>
        <Text>
          Signatures are usually also{" "}
          <Highlight color="#fac863">hashed</Highlight>
        </Text>
      </Slide>

      <Slide>
        <Image src={signing} alt="A schema explaining how signing works" />
      </Slide>
      <Slide>
        <Image src={verifying} alt="A schema explaining how verifying works" />
      </Slide>
      <Slide notes="RSA is named after the creators of the algorithm, Rivest–Shamir–Adleman">
        <Subtitle>Signing algorithms</Subtitle>
        <Text>
          The most commonly used public-key cryptography aproaches when signing
          are <Highlight color="#fac863">RSA</Highlight>,{" "}
          <Highlight color="#fac863">elliptic curve (EC)</Highlight> and{" "}
          <Highlight color="#fac863">
            Edwards-curve Octet Key Pair (OKP)
          </Highlight>
        </Text>
      </Slide>
      <Slide>
        <Subtitle>RSA keys</Subtitle>
        <Text>
          <Highlight color="#fac863">RS256, RS384, RS512</Highlight>
          <br />

          <Highlight color="#fac863">PS256, PS384, PS512</Highlight>
        </Text>
      </Slide>
      <Slide>
        <Subtitle>RSA keys</Subtitle>
        <List>
          <li>
            <span role="img" aria-label="thumbs up">
              👍
            </span>{" "}
            Fast verification
          </li>
          <li>
            <span role="img" aria-label="thumbs up">
              👍
            </span>{" "}
            CPU friendly
          </li>
          <li>
            <span role="img" aria-label="thumbs up">
              👍
            </span>{" "}
            Good support (RS256)
          </li>
          <li>
            <span role="img" aria-label="thumbs down">
              👎
            </span>{" "}
            Longer keys (minimum 2056 bit is recommended)
          </li>
          <li>
            <span role="img" aria-label="thumbs down">
              👎
            </span>{" "}
            Longer signatures
          </li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>Elliptic curve keys</Subtitle>
        <Text>
          <Highlight color="#fac863">ES256, ES384, ES512</Highlight>
        </Text>
      </Slide>
      <Slide>
        <Subtitle>Elliptic curve keys</Subtitle>
        <List>
          <li>
            <span role="img" aria-label="thumbs up">
              👍
            </span>{" "}
            Shorter keys (of equivalent to RSA strength)
          </li>
          <li>
            <span role="img" aria-label="thumbs up">
              👍
            </span>{" "}
            Shorter signatures
          </li>
          <li>
            <span role="img" aria-label="thumbs down">
              👎
            </span>{" "}
            Slower verification
          </li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>Edwards-Curve Octet Keys</Subtitle>
        <Text>
          <Highlight color="#fac863">Ed25519, Ed448</Highlight>
        </Text>
      </Slide>
      <Slide>
        <Subtitle>Edwards-Curve Octet Keys</Subtitle>
        <List>
          <li>
            <span role="img" aria-label="thumbs up">
              👍
            </span>{" "}
            Best signing performance
          </li>
          <li>
            <span role="img" aria-label="thumbs down">
              👎
            </span>{" "}
            Relatively new, not the best library support
          </li>
        </List>
      </Slide>
      {/* -- End Signing -- */}

      {/* -- Start Encription -- */}
      <Slide style={{ background: "#fac863" }}>
        <Subtitle style={{ letterSpacing: "4rem" }}>Encryption</Subtitle>
      </Slide>
      <Slide>
        <Text>
          When encrypting data, we can not only ensure its{" "}
          <Highlight color="#fac863">integrity and authenticity</Highlight>{" "}
          (like keyed hashes), the data will stay{" "}
          <Highlight color="#fac863">secret for outsiders</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          You need either a <Highlight color="#fac863">private key</Highlight>,{" "}
          <Highlight color="#fac863">secret key</Highlight> or{" "}
          <Highlight color="#fac863">password</Highlight> to read the data
        </Text>
      </Slide>
      <Slide>
        <Text>
          The encypted message is often called{" "}
          <Highlight color="#fac863">a cipher</Highlight>.
        </Text>
      </Slide>

      <Slide>
        <Subtitle>Symmetric encryption</Subtitle>
      </Slide>
      <Slide>
        <Text>
          Example usecases are:{" "}
          <Highlight color="#fac863">
            file system encryption, Wi-Fi protected access (WPA), database
            encryption
          </Highlight>{" "}
        </Text>
      </Slide>
      <Slide>
        <Subtitle>Symmetric algorithms</Subtitle>
        <Text>
          <Highlight color="#fac863">
            Direct AES, AES key wrap, AES GCM
          </Highlight>
        </Text>
      </Slide>
      <Slide>
        <Image src={EncSym} />
      </Slide>

      <Slide>
        <Subtitle>Asymmetric encryption</Subtitle>
      </Slide>
      <Slide>
        <Text>
          The sender asks for{" "}
          <Highlight color="#fac863">the receiver's public key</Highlight>, and
          uses it to <Highlight color="#fac863">encrypt the message</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          When the receiver receives the cipher, they use{" "}
          <Highlight color="#fac863">
            their matching private key to decrypt
          </Highlight>{" "}
          the message.
        </Text>
      </Slide>
      <Slide>
        <Image src={EncAsym} />
      </Slide>
      <Slide>
        <Subtitle>Asymmetric encryption</Subtitle>\
        <Text>
          Example usecases are:{" "}
          <Highlight color="#fac863">TLS, VPN, SSH</Highlight>{" "}
        </Text>
      </Slide>
      <Slide>
        <Subtitle>Asymmetric algorithms</Subtitle>
        <Text>
          <Highlight color="#fac863">RSA OAEP, RSA OAEP, ECDH-ES</Highlight>
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#fac863">Symmetric algorithms are faster</Highlight>{" "}
          than asymmetric ones.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>A detailed example: RSA</Subtitle>
      </Slide>
      <Slide>
        <Subtitle>Generating keys</Subtitle>
      </Slide>
      <Slide>
        <Text>
          Note: Cryptography is usually based on some algorithms using{" "}
          <Highlight color="#fac863">large prime numbers</Highlight>, RSA is no
          exception.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>Is a million a large number?</Subtitle>
        <Text style={{ fontSize: "8rem", fontFamily: "monospace" }}>
          1.000.000
        </Text>
      </Slide>
      <Slide>
        <Subtitle>Is a billion a large number?</Subtitle>
        <Text style={{ fontSize: "8rem", fontFamily: "monospace" }}>
          1.000.000.000
        </Text>
      </Slide>
      <Slide>
        <Text
          style={{
            maxWidth: "80vw",
            wordBreak: "break-all",
            fontSize: "8rem",
            fontFamily: "monospace",
          }}
        >
          12977431783174311477715168088033263056409713689016918381068966825230649007458558447797159066437571044576098261599777315303876569591523397177150786901260953
        </Text>
      </Slide>
      <Slide>
        <Text
          style={{
            maxWidth: "80vw",
            wordBreak: "break-all",
            fontSize: "8rem",
            fontFamily: "monospace",
          }}
        >
          <Highlight color="#fac863" style={{ padding: 0 }}>
            1297743
          </Highlight>
          1783174311477715168088033263056409713689016918381068966825230649007458558447797159066437571044576098261599777315303876569591523397177150786901260953
        </Text>
      </Slide>
      <Slide>
        <Text
          style={{
            maxWidth: "80vw",
            wordBreak: "break-all",
            fontSize: "8rem",
            fontFamily: "monospace",
          }}
        >
          <Highlight color="#fac863" style={{ padding: 0 }}>
            1297743178
          </Highlight>
          3174311477715168088033263056409713689016918381068966825230649007458558447797159066437571044576098261599777315303876569591523397177150786901260953
        </Text>
      </Slide>
      <Slide notes="The Least Common Multiple">
        <Image
          src={rsaKeyGeneration}
          alt="Schema of how RSA key generation works"
        />
      </Slide>
      <Slide>
        <Subtitle>Using a public key to encrypt</Subtitle>
      </Slide>
      <Slide>
        <Image
          src={rsaEncryptionSimple}
          alt="Schema of how RSA encryption works"
        />
      </Slide>
      <Slide>
        <Image src={rsaEncryption} alt="Schema of how RSA encryption works" />
      </Slide>
      <Slide>
        <Image
          src={rsaEncryptionFade}
          alt="Schema of how RSA encryption works"
        />
      </Slide>
      <Slide>
        <Subtitle>Using a private key to decrypt</Subtitle>
      </Slide>
      <Slide>
        <Image
          src={rsaDecryptionSimple}
          alt="Schema of how RSA decryption works"
        />
      </Slide>
      <Slide>
        <Image src={rsaDecryption} alt="Schema of how RSA decryption works" />
      </Slide>
      <Slide>
        <Image
          src={rsaDecryptionFade}
          alt="Schema of how RSA decryption works"
        />
      </Slide>
      <Slide>
        <Image src={simpleRsaDemo} alt="A screenshot of the simple RSA demo" />
      </Slide>
      <Slide>
        <Image src={rsaDemo} alt="A screenshot of the RSA demo" />
      </Slide>
      <Slide>
        <Text>
          <a
            href="https://github.com/Sambego/rsa-demo/"
            title="A GitHub repository with the code for the RSA demo"
            style={{ color: "#000", borderColor: "#fac863" }}
          >
            https://github.com/Sambego/rsa-demo/
          </a>
        </Text>
        <Text style={{ fontSize: "3rem", marginTop: "3rem" }}>
          There are 3 branches, one with{" "}
          <Highlight color="#fac863">simple numbers</Highlight>,<br /> one with{" "}
          <Highlight color="#fac863">large numbers</Highlight> and one with some{" "}
          <Highlight color="#fac863">data conversion</Highlight>.
        </Text>
      </Slide>
      {/* -- End Encription -- */}

      {/* -- Start JOSE -- */}
      <Slide style={{ background: "#fac863" }}>
        <Subtitle style={{ letterSpacing: "4rem" }}>JOSE</Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "8rem",
              textAlign: "center",
            }}
          >
            J
          </Highlight>
          SON
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "8rem",
              textAlign: "center",
            }}
          >
            O
          </Highlight>
          bject
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "8rem",
              textAlign: "center",
            }}
          >
            S
          </Highlight>
          igning <span style={{ color: "#c0c5ce" }}>and</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "8rem",
              textAlign: "center",
            }}
          >
            E
          </Highlight>
          ncryption
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          Why <Highlight color="#fac863">JSON</Highlight>?
        </Subtitle>
      </Slide>
      <Slide>
        <Text>
          The JSON format is often used for{" "}
          <Highlight color="#fac863">
            serializing and transmitting structured data
          </Highlight>{" "}
          over a <Highlight color="#fac863">network connection</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#fac863">Excellent support</Highlight> in most
          programing languages.
        </Text>
      </Slide>

      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            J
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>SON</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            W
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>eb</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            *
          </Highlight>
          Something
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            J
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>SON</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            W
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>eb</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            K
          </Highlight>
          ey
        </Subtitle>
      </Slide>
      <Slide>
        <Image src={JWK} alt="jwk" contain />
      </Slide>
      <Slide>
        <Image src={JWK2} alt="jwk" contain />
      </Slide>

      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            J
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>SON</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            W
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>eb</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            S
          </Highlight>
          ignature
        </Subtitle>
      </Slide>
      <Slide>
        <Image src={jws} alt="JWS explanation" />
      </Slide>
      <Slide>
        <Subtitle
          style={{
            maxWidth: "80vw",
            wordWrap: "break-word",
            textAlign: "left",
          }}
        >
          <span style={{ textTransform: "none" }}>
            <Highlight
              color="#fac863"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              eyJhbGciOiJIUzI1NiJ9
            </Highlight>
            <span
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
                margin: "0 1rem",
              }}
            >
              .
            </span>
            <Highlight
              color="#fac863"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              eyJmb28iOiJiYXIifQ
            </Highlight>
            <span
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
                margin: "0 1rem",
              }}
            >
              .
            </span>
            <Highlight
              color="#fac863"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              CF6Vx76CKtqGBm6AWFceoYUr038Lk3tu-1yPgvQN3-0
            </Highlight>
          </span>
        </Subtitle>
      </Slide>

      <Slide>
        <Subtitle>JOSE Header</Subtitle>
      </Slide>
      <Slide>
        <Subtitle
          style={{
            maxWidth: "80vw",
            wordWrap: "break-word",
            textAlign: "left",
          }}
        >
          <span style={{ textTransform: "none" }}>
            <Highlight
              color="#fac863"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              eyJhbGciOiJIUzI1NiJ9
            </Highlight>
            <span
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
                margin: "0 1rem",
              }}
            >
              .
            </span>
            <Highlight
              color="rgba(250, 200, 99, 0.3)"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              eyJmb28iOiJiYXIifQ
            </Highlight>
            <span
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
                margin: "0 1rem",
              }}
            >
              .
            </span>
            <Highlight
              color="rgba(250, 200, 99, 0.3)"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              CF6Vx76CKtqGBm6AWFceoYUr038Lk3tu-1yPgvQN3-0
            </Highlight>
          </span>
        </Subtitle>
      </Slide>
      <Slide>
        <Image src={JWSHeader} alt="JWS Header" contain />
      </Slide>

      <Slide>
        <Subtitle>Payload</Subtitle>
      </Slide>
      <Slide>
        <Subtitle
          style={{
            maxWidth: "80vw",
            wordWrap: "break-word",
            textAlign: "left",
          }}
        >
          <span style={{ textTransform: "none" }}>
            <Highlight
              color="rgba(250, 200, 99, 0.3)"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              eyJhbGciOiJIUzI1NiJ9
            </Highlight>
            <span
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
                margin: "0 1rem",
              }}
            >
              .
            </span>
            <Highlight
              color="#fac863"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              eyJmb28iOiJiYXIifQ
            </Highlight>
            <span
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
                margin: "0 1rem",
              }}
            >
              .
            </span>
            <Highlight
              color="rgba(250, 200, 99, 0.3)"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              CF6Vx76CKtqGBm6AWFceoYUr038Lk3tu-1yPgvQN3-0
            </Highlight>
          </span>
        </Subtitle>
      </Slide>
      <Slide>
        <Image src={JWSPayload} alt="JWS Payload" contain />
      </Slide>

      <Slide>
        <Subtitle>Signature</Subtitle>
      </Slide>
      <Slide>
        <Subtitle
          style={{
            maxWidth: "80vw",
            wordWrap: "break-word",
            textAlign: "left",
          }}
        >
          <span style={{ textTransform: "none" }}>
            <Highlight
              color="rgba(250, 200, 99, 0.3)"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              eyJhbGciOiJIUzI1NiJ9
            </Highlight>
            <span
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
                margin: "0 1rem",
              }}
            >
              .
            </span>
            <Highlight
              color="rgba(250, 200, 99, 0.3)"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              eyJmb28iOiJiYXIifQ
            </Highlight>
            <span
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
                margin: "0 1rem",
              }}
            >
              .
            </span>
            <Highlight
              color="#fac863"
              style={{
                border: "4px solid black",
                borderRadius: ".5rem",
                padding: ".5rem",
                lineHeight: "12rem",
              }}
            >
              CF6Vx76CKtqGBm6AWFceoYUr038Lk3tu-1yPgvQN3-0
            </Highlight>
          </span>
        </Subtitle>
      </Slide>
      <Slide>
        <Image src={JWSSignature} alt="JWS Signature" contain />
      </Slide>

      <Slide notes="https://medium.facilelogin.com/jwt-jws-and-jwe-for-not-so-dummies-b63310d201a3">
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            J
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>SON</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            W
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>eb</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            E
          </Highlight>
          ncryption
        </Subtitle>
      </Slide>
      <Slide>
        <Image src={jwe} alt="JWE explanation" />
      </Slide>
      <Slide>
        <Text>JWEs use 2 kind of encryption.</Text>
      </Slide>
      <Slide>
        <Text>
          The <Highlight color="#fac863">content encryption key</Highlight> is
          usually encrypted with an{" "}
          <Highlight color="#fac863">asymetrical algorithm</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Image src={JWEKeyExpl1} alt="JWEKeyExpl1 explanation" />
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#fac863">The cipher</Highlight> is encrypted using a{" "}
          <Highlight color="#fac863">
            symetrical content encryption key (CEK)
          </Highlight>
          .
        </Text>
      </Slide>
      <Slide>
        <Image src={JWEKeyExpl2} alt="JWE explanation" />
      </Slide>
      <Slide>
        <Subtitle>JOSE Header</Subtitle>
      </Slide>
      <Slide>
        <Image src={jweHeader} contain />
      </Slide>
      <Slide>
        <Subtitle>Decrypt the Content Encryption Key (CEK)</Subtitle>
      </Slide>
      <Slide>
        <Image src={jweEncKey1} />
      </Slide>
      <Slide>
        <Image src={jweEncKey2} />
      </Slide>
      <Slide>
        <Image src={jweEncKey3} />
      </Slide>
      <Slide>
        <Subtitle>Decrypt the cipher</Subtitle>
      </Slide>
      <Slide>
        <Image src={jweDecrypt1} />
      </Slide>
      <Slide>
        <Image src={jweDecrypt2} />
      </Slide>
      <Slide>
        <Image src={jweDecrypt3} />
      </Slide>
      <Slide notes="Not all algorithms require an initialization vector. If not needed it will be empty in the serialized JWE, meaning there will be 2 dots with nothing in between.">
        <Image src={jweDecrypt4} />
      </Slide>
      <Slide>
        <Image src={jweDecrypt5} />
      </Slide>

      <Slide>
        <Text>
          Both JSON Web Signatures and JSON Web Encryption can be serialized as{" "}
          <Highlight color="#fac863">compact</Highlight> (a string) and{" "}
          <Highlight color="#fac863">JSON</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Image src={JWSJSON} contain />
      </Slide>
      <Slide>
        <Image src={JWEJSON} contain />
      </Slide>

      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            J
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>SON</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            W
          </Highlight>
          <span style={{ color: "#c0c5ce" }}>eb</span>
          <br />
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center",
            }}
          >
            T
          </Highlight>
          oken
        </Subtitle>
      </Slide>
      <Slide>
        <Text>
          A JSON Web Token{" "}
          <Highlight color="#fac863">can be a JWS or a JWE</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#fac863">A JWS is more commonly used</Highlight> as
          a JWT.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>JWT Header</Subtitle>
      </Slide>
      <Slide notes="Notice the JWT type">
        <Image src={JWTHeader} contain />
      </Slide>
      <Slide>
        <Subtitle>Access Token</Subtitle>
      </Slide>
      <Slide>
        <Image src={JWTAccess} contain />
      </Slide>
      <Slide>
        <Subtitle>ID Token</Subtitle>
      </Slide>
      <Slide>
        <Image src={JWTId} contain />
      </Slide>
      {/* -- End JOSE -- */}

      <Slide style={{ background: "#fac863" }}>
        <Subtitle style={{ letterSpacing: "4rem" }}>Summary</Subtitle>
      </Slide>
      <Slide>
        <Text>
          Hashing compresses and makes it virtually impossible to get to the
          real data.
        </Text>
      </Slide>
      <Slide>
        <Text>Keyed hashes protect the integrety of data.</Text>
      </Slide>
      <Slide>
        <Text>
          Digital signatures allows third parties to verify the validity and
          origin of data.
        </Text>
      </Slide>
      <Slide>
        <Text>Encryption allows only authorized people to read the data.</Text>
      </Slide>
      <Slide>
        <Text>
          JOSE is a set of standards, based on JSON that help us with signatures
          and encryption on the web.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderColor: "#fac863" }}
            href="https://jose.sambego.tech"
          >
            jose.sambego.tech
          </a>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderColor: "#fac863" }}
            href="https://jwt.io"
          >
            jwt.io
          </a>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderColor: "#fac863" }}
            href="https://auth0.com/blog/how-secure-are-encryption-hashing-encoding-and-obfuscation"
          >
            auth0.com/blog/how-secure-are-encryption-hashing-encoding-and-obfuscation
          </a>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          I'll be ranting about <Highlight color="#fac863">passwords</Highlight> today at <Highlight color="#fac863">16:15</Highlight>!
        </Subtitle>
      </Slide>
      <Slide style={{ background: "#fac863" }}>
        <Subtitle
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          Thanks
        </Subtitle>
        <Image
          src={cat}
          style={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translate3d(-50%, 2px, 0)",
            width: "20vw",
            zIndex: 0,
          }}
        />
      </Slide>
    </Deck>
  );
}

export default SlideDeck;
