package main

import (
	"fmt"
	pb "golearn/api/v1"
)

func main() {
	commonsLang3 := pb.GradleModuleVersion{
		Group:   "org.apache.commons",
		Name:    "commons-lang3",
		Version: "3.14.0",
	}

	fmt.Println("artifact rep:", commonsLang3)
}
