package v1

import (
	"fmt"
	py "github.com/bufbuild/protoyaml-go"
	pb "golearn/api/v1"
	"log"
	"os"
)

func readFromFile() pb.Scan {
	dat, err := os.ReadFile("../../resources/fromFile.yml")

	if err != nil {
		log.Fatal(err)
	}

	options := py.UnmarshalOptions{
		Path: "consume.yaml",
	}
	var myScan pb.Scan
	if err := options.Unmarshal(dat, &myScan); err != nil {
		log.Fatal(err)
	}

	fmt.Println("scan :", myScan)

	return myScan
}
