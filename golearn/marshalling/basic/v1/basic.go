package v1

import (
	"fmt"
	"github.com/bufbuild/protoyaml-go"
	pb "golearn/api/v1"
	"log"
	"os"
)

func readScan() pb.Scan {
	scan := pb.Scan{
		Dependencies: []*pb.GradleModuleVersion{
			{
				Group:   "org.apache.commons",
				Name:    "commons-lang3",
				Version: "3.14.0",
			},
			{
				Group:   "org.apache.commons",
				Name:    "commons-utils",
				Version: "1.22.SNAPSHOT",
			}},
	}

	fmt.Println("scan :", scan)

	yamlBytes, err := protoyaml.Marshal(&scan)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("scan yaml bytes v2 :", string(yamlBytes[:]))

	err = os.WriteFile("../../resources/basic.yml", yamlBytes, 0644)

	if err != nil {
		log.Fatal(err)
	}

	// Unmarshal a proto message from YAML.
	options := protoyaml.UnmarshalOptions{
		Path: "basic.proto3test.yaml",
	}
	var myScan pb.Scan
	if err := options.Unmarshal(yamlBytes, &myScan); err != nil {
		log.Fatal(err)
	}

	return myScan
}
