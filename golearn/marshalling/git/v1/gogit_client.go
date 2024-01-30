package v1

import (
	"fmt"
	gg "github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing/object"
	"github.com/go-git/go-git/v5/storage/memory"
	"log"
	"os"
)

func StandardGitClone() {
	_, err := gg.PlainClone("foo", false, &gg.CloneOptions{
		URL:      "https://github.com/go-git/go-git",
		Progress: os.Stdout,
	})

	if err != nil {
		log.Fatal(err)
	}
}

func MemoryBasedClone() {
	r, err := gg.Clone(memory.NewStorage(), nil, &gg.CloneOptions{
		URL: "https://github.com/go-git/go-billy",
	})
	if err != nil {
		log.Fatal(err)
	}

	ref, err := r.Head()
	if err != nil {
		log.Fatal(err)
	}
	cIter, err := r.Log(&gg.LogOptions{From: ref.Hash()})
	if err != nil {
		log.Fatal(err)
	}

	// ... just iterates over the commits, printing it
	err = cIter.ForEach(func(c *object.Commit) error {
		fmt.Println(c)
		return nil
	})

}
