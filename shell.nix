{ pkgs ? import (fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/refs/tags/23.05.tar.gz";
    sha256 = "08sdywsz2kd9szd3pcfsm9vhpp370ldd7vndp0cia575f6yaibnm";
}
) {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_18
  ];

  shellHook = ''
    echo starting shell for flight-tracker-global...
  '';
}