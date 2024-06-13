import React from "react";
import { useTheme } from "next-themes";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";
import ImageGallery from "react-image-gallery";

// projects: {
//     id: string;
//     title: string;
//     description: string;
//     imageSrc: string;
//     imageSrcSet: string[];
//     url: string;

export default function ModalViewer(props) {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Modal
        size={"full"}
        backdrop={"blur"}
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
        scrollBehavior={"outside"}
        shadow={"none"}
        //placement={"top-center"}
        classNames={{
          backdrop: "bg-black/90",
          base: "bg-black/0 border-white text-white",
          header: "border-b-[0px]",
          footer: "border-t-[0px]",
          //closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-3">
                <a className="modal-title">{props.title}</a>
              </ModalHeader> */}
              <ModalBody>
                <div className="tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-5">
                  <div style={{ width: "95%" }}>
                  {props.Date && <><a className="modal-subtitle-date">{props.Date}</a><br/></>}
                    <a className="modal-title">{props.title.toUpperCase()}</a>
                    <br />
                    {props.subtitle.split("<br>").map((textline) => {
                      return (
                        <>
                          <a className="modal-subtitle">{textline}</a>
                          <br />
                        </>
                      );
                    })}
                    <br />
                    <br />
                    <br />
                    {props.description.split("<br>").map((textline) => {
                      return (
                        <>
                          <a className="modal-text">{textline}</a>
                          <br />
                        </>
                      );
                    })}
                    <br />
                    <br />
                    {props.Reflection && (
                      <>
                        <a className="modal-subheading">Reflection</a>
                        <br />
                        <br />
                      </>
                    )}
                    {props.Reflection &&
                      props.Reflection.split("<br>").map((textline) => {
                        return (
                          <>
                            <a className="modal-text">{textline}</a>
                            <br />
                          </>
                        );
                      })}
                  </div>
                  {props.imageSrcSet && (
                    <div>
                      <ImageGallery
                        infinite={true}
                        //useBrowserFullscreen={false}
                        //showNav={false}
                        //showFullscreenButton={false}
                        showPlayButton={false}
                        slideDuration={300}
                        items={props.imageSrcSet.map((image) => {
                          return { original: image, thumbnail: image};
                        })}
                      />
                    </div>
                  )}
                </div>
              </ModalBody>
              <div className="mx-auto">
                <ModalFooter>
                  <Button Size="lg" variant="light" onPress={onClose}>
                    <a className="text-white">Close</a>
                  </Button>
                  {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
                </ModalFooter>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
