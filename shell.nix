{ pkgs ? import (fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/refs/tags/23.05.tar.gz";
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