package v1

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestReadScan(t *testing.T) {

	scan := readScan()

	assert.Len(t, scan.Dependencies, 2)
}
