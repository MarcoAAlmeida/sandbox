package v1

import (
	"github.com/stretchr/testify/assert"
	"log"
	"os"
	"testing"
)

func setupSuite(tb testing.TB) func(tb testing.TB) {
	log.Println("setup suite")

	err := os.RemoveAll("foo")
	if err != nil {
		return nil
	}

	// Return a function to teardown the test
	return func(tb testing.TB) {
		log.Println("do the cleanup")
		err = os.RemoveAll("foo")

		log.Println("teardown suite")
	}
}

func TestMemoryBasedClone(t *testing.T) {
	MemoryBasedClone()
}

func TestReadScan(t *testing.T) {

	teardownSuite := setupSuite(t)
	defer teardownSuite(t)

	StandardGitClone()

	assert.DirExists(t, "foo")
}
