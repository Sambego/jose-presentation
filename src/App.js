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
  Footer
} from "@sambego/diorama";

import Speedy from "./video/speedy.mp4";
import NPM from "./video/npm.mp4";

import cc from "./img/cc.svg";
import Sam from "./img/sam.png";
import Poes from "./img/poes.jpg";
import hashing from "./img/hashing.svg";
import keyedHashing from "./img/keyed-hashing.svg";
import keyedHashingDetail from "./img/keyed-hashing-detail.svg";
import signing from "./img/signing.svg";
import verifying from "./img/verifying.svg";

function SlideDeck() {
  return (
    <Deck
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
            zIndex: 2
          }}
          alt="Creative commons"
        />
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Image src={Sam} alt="A picture of me" full color="#fac863" />
          </div>
          <div>
            <Subtitle>Sam Bellen</Subtitle>
            <List>
              <li>Developer Advocate Engineer</li>
              <li>Auth0</li>
              <li>Google Developer Expert</li>
              <li>Fronteers</li>
              <li>I&S London</li>
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
      <Slide>
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
            margin: 0
          }}
        >
          Tweet me @sambego
        </Subtitle>
      </Slide>
      <Slide>
        <Text>
          <strong>Disclaimer</strong>: I am not an
          <Highlight color="#fac863">exprert in cryptography</Highlight> and I
          might{" "}
          <Highlight color="#fac863">
            simplify certain things to try explain them
          </Highlight>{" "}
          in an easy way.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>Summary</Subtitle>
        <List>
          <li>Hashing</li>
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
      <Slide>
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
      <Slide>
        <Subtitle>Keyed hashing</Subtitle>
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
      <Slide note="https://www.freeformatter.com/hmac-generator.html#ad-output">
        <Image
          src={keyedHashing}
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
            }}
          >
            <span style={{ fontSize: "4rem", verticalAlign: "middle" }}>
              265
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
            }}
          >
            <span style={{ fontSize: "4rem", verticalAlign: "middle" }}>
              265
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
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
              marginRight: "10px"
            }}
          >
            <span style={{ fontSize: "4rem", verticalAlign: "middle" }}>
              265
            </span>
          </Highlight>
          Bit
        </Subtitle>
      </Slide>
      {/* -- End Hashing -- */}

      {/* -- Start Signing -- */}
      <Slide style={{ background: "#fac863" }}>
        <Subtitle style={{ letterSpacing: "4rem" }}>Signing</Subtitle>
      </Slide>
      <Slide>
        <Text>
          Digital signatures offer all properties of keyed hashes, plus{" "}
          <Highlight color="#fac863">cryptographic non-repudiation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          Cryptographic non-repudiation{" "}
          <Highlight color="#fac863">enables other parties</Highlight> than the
          signer to{" "}
          <Highlight color="#fac863">check the signature's validity</Highlight>.
        </Text>
      </Slide>
      <Slide>
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
        <Image src={signing} alt="A schema explaining how signing works" />
      </Slide>
      <Slide>
        <Image src={verifying} alt="A schema explaining how verifying works" />
      </Slide>
      <Slide>
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
          <li>👍 Fast verification</li>
          <li>👍 CPU friendly</li>
          <li>👍 Good support (RS256)</li>
          <li>👎 Longer keys (minimum 2056 bit is recommended)</li>
          <li>👎 Longer signatures</li>
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
          <li>👍 Shorter keys (of equivalent to RSA strength)</li>
          <li>👍 Shorter signatures</li>
          <li>👎 Slower verification</li>
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
          <li>👍 Best signing performance</li>
          <li>👎 Relatively new, not the best library support</li>
        </List>
      </Slide>
      {/* -- End Signing -- */}

      {/* -- Start Encription -- */}
      <Slide style={{ background: "#fac863" }}>
        <Subtitle style={{ letterSpacing: "4rem" }}>Encryption</Subtitle>
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
              textAlign: "center"
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
              textAlign: "center"
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
              textAlign: "center"
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
              textAlign: "center"
            }}
          >
            E
          </Highlight>
          ncryption
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center"
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
              textAlign: "center"
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
              textAlign: "center"
            }}
          >
            S
          </Highlight>
          ignature
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center"
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
              textAlign: "center"
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
              textAlign: "center"
            }}
          >
            E
          </Highlight>
          ncryption
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center"
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
              textAlign: "center"
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
              textAlign: "center"
            }}
          >
            T
          </Highlight>
          oken
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center"
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
              textAlign: "center"
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
              textAlign: "center"
            }}
          >
            K
          </Highlight>
          ey
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{ textAlign: "left" }}>
          <Highlight
            color="#fac863"
            style={{
              display: "inline-block",
              width: "11rem",
              textAlign: "center"
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
              textAlign: "center"
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
              textAlign: "center"
            }}
          >
            A
          </Highlight>
          lgorithm
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
          <Highlight color="#fac863">Excelent support</Highlight> in most
          programing languages.
        </Text>
      </Slide>
      {/* -- End JOSE -- */}
    </Deck>
  );
}

export default SlideDeck;
