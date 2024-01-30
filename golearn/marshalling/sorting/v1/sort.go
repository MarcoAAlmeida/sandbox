package v1

import (
	"fmt"
	py "github.com/bufbuild/protoyaml-go"
	pb "golearn/api/v1"
	"log"
	"os"
	"sort"
)

type ByNameReversed []*pb.GradleModuleVersion

func (a ByNameReversed) Len() int           { return len(a) }
func (a ByNameReversed) Less(i, j int) bool { return a[i].Name > a[j].Name }
func (a ByNameReversed) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }

func SortDependenciesByNameReversed() []*pb.GradleModuleVersion {
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

	sort.Sort(ByNameReversed(myScan.Dependencies))

	return myScan.Dependencies
}

func SortByMapKeyOrValue() map[string]int {
	m := map[string]int{"Alice": 2, "Cecil": 1, "Bob": 3}

	keys := make([]string, 0, len(m))
	for k := range m {
		keys = append(keys, k)
	}
	sort.Strings(keys)

	for _, k := range keys {
		fmt.Println(k, m[k])
	}

	return m
}
